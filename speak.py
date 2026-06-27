#!/usr/bin/env python3
"""テキストを音声で読み上げる。VOICEVOXのローカルAPI(http://127.0.0.1:50021)を使う。
事前にVOICEVOXアプリを起動しておくこと。

使い方:
    python3 speak.py "読んでほしいテキスト"
    echo "読んでほしいテキスト" | python3 speak.py
    python3 speak.py --speaker 3 "テキスト"   # 3=ずんだもん ノーマル
"""
import argparse
import json
import subprocess
import sys
import tempfile
import time
import urllib.parse
import urllib.request

VOICEVOX_URL = "http://127.0.0.1:50021"


def speak(text: str, speaker: int = 8, delay: float = 0.0) -> None:
    # 音声入力(ディクテーション)終了直後はシステム音声がミュートされたままの
    # ことがあるため、再生前に少し待ってミュート解除を待つ。
    time.sleep(delay)

    query_req = urllib.request.Request(
        f"{VOICEVOX_URL}/audio_query?text={urllib.parse.quote(text)}&speaker={speaker}",
        method="POST",
    )
    with urllib.request.urlopen(query_req) as resp:
        audio_query = json.load(resp)

    synth_req = urllib.request.Request(
        f"{VOICEVOX_URL}/synthesis?speaker={speaker}",
        data=json.dumps(audio_query).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(synth_req) as resp:
        wav_bytes = resp.read()

    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        f.write(wav_bytes)
        wav_path = f.name

    subprocess.run(["afplay", wav_path], check=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("text", nargs="?", help="読み上げるテキスト（省略時は標準入力）")
    parser.add_argument("--speaker", type=int, default=8, help="VOICEVOXのスピーカーID (例: 8=春日部つむぎ, 2=四国めたん, 3=ずんだもん)")
    parser.add_argument("--delay", type=float, default=0.0, help="再生開始までの待機秒数")
    args = parser.parse_args()

    text = args.text if args.text is not None else sys.stdin.read()
    text = text.strip()
    if not text:
        return

    speak(text, speaker=args.speaker, delay=args.delay)


if __name__ == "__main__":
    main()
