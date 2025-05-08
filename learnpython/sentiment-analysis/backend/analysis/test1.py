import joblib 
import fugashi
import re
from sklearn.feature_extraction.text import TfidfVectorizer

class TestAnalyzer:
    def __init__(self, model_path: str, vectorizer_path: str):
        self.model = joblib.load(model_path)  
        self.vectorizer = joblib.load(vectorizer_path)  
        self.tagger = fugashi.GenericTagger("-r /opt/homebrew/etc/mecabrc -d /opt/homebrew/Cellar/mecab-ipadic/2.7.0-20070801/lib/mecab/dic/ipadic")

    def text_preprocess(self, text: str) -> str:
        text = text.lower()
        text = re.sub(r"\d+", "0", text)
        text = re.sub(r"[^\w\s]", "", text)
        return text
    

    def tokenize(self, text: str):
        return [token.surface for token in self.tagger(text)]

    def predict(self, text: str) -> str:
        text_processed = self.text_preprocess(text)
        tokens = self.tokenize(text_processed)
        
        text_vectorized = self.vectorizer.transform([' '.join(tokens)])
        predict = self.model.predict(text_vectorized)
        return predict