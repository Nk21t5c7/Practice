from datasets import load_dataset

# データセットの読み込み
dataset = load_dataset("SetFit/amazon_reviews_multi_ja")

# なんのキーがあるか確認
print(dataset.keys())

# それぞれのデータ取得
train_data = dataset["train"]
validation_data = dataset["validation"]
test_data = dataset["test"]

# データ中身
# label = 0: negative
print(train_data[0].keys())

# モデル保存
import joblib

# 正規表現用のライブラリ
import re

# 単語の重要度を数値で表す
from sklearn.feature_extraction.text import TfidfVectorizer

# 処理の流れをまとめる
from sklearn.pipeline import Pipeline

# 文章の分類
from sklearn.naive_bayes import MultinomialNB

# モデルの正確性判定
from sklearn.metrics import accuracy_score, classification_report

# データを学習用とテスト用に分ける
from sklearn.model_selection import train_test_split

# 数値計算
import numpy as np

# CSV扱うライブラリ
import pandas as pd

# 日本語を単語に分割
import fugashi

# ストップワードの定義
stop_words = set(
    [
        "の", "に", "は", "を", "た", "が", "で", "て", "と", "し", "れ", 
        "さ", "ある", "いる", "も", "する", "から", "な", "こと", "として", 
        "い", "や", "れる", "ない", "よう", ""
    ]
)


tagger = fugashi.GenericTagger("-r /opt/homebrew/etc/mecabrc -d /opt/homebrew/Cellar/mecab-ipadic/2.7.0-20070801/lib/mecab/dic/ipadic")

# 前処理関数
def text_preprocess(text: str) -> str:
    text = text.lower()  
    text = re.sub(r"\d+", "0", text)  
    text = re.sub(r"[^\w\s]", "", text) 
    return text

# tokenize 関数を定義
def tokenize(text: str):
    return [token.surface for token in tagger(text)]



# データフレームに変換
train_df = pd.DataFrame(train_data)
validation_df = pd.DataFrame(validation_data)
test_df = pd.DataFrame(test_data)

# 前処理を適用
train_df["text"] = train_df["text"].apply(text_preprocess)
validation_df["text"] = validation_df["text"].apply(text_preprocess)
test_df["text"] = test_df["text"].apply(text_preprocess)

train_df['tokens'] = train_df['text'].apply(tokenize)
validation_df['tokens'] = validation_df['text'].apply(tokenize)
test_df['tokens'] = test_df['text'].apply(tokenize)

print(train_df.keys())

train_df['processed_text'] = train_df['tokens'].apply(lambda x: ' '.join(x))
validation_df['processed_text'] = validation_df['tokens'].apply(lambda x: ' '.join(x))
test_df['processed_text'] = test_df['tokens'].apply(lambda x: ' '.join(x))

# トークン化後のデータを表示
print(train_df["tokens"].head()) 

# 機械学習モデルが理解できるように数値化する
vectorizer = TfidfVectorizer()

print(train_df.keys())

# fit_transform: 語彙を学習してからベクトルに変換
X_train = vectorizer.fit_transform(train_df['processed_text'])
Y_train = train_df['label']

# transform: すでに学習した語彙を使って、新しいデータをベクトル化
# 語彙にない単語は無視される
X_validation = vectorizer.transform(validation_df['processed_text'])
Y_validation = validation_df['label']

X_test = vectorizer.transform(test_df['processed_text'])
Y_test = test_df['label']

model = MultinomialNB()
model.fit(X_train, Y_train)

y_pred_v = model.predict(X_validation)

print(accuracy_score(Y_validation, y_pred_v))
print(classification_report(Y_validation, y_pred_v))

joblib.dump(model, 'trained.joblib')
joblib.dump(vectorizer, 'vectorizer.joblib')
