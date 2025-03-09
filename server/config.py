import os
from dotenv import load_dotenv


class Config:
    def __init__(self):
        load_dotenv()  # Load environment variables from .env file

    @property
    def profit_and_loss_file_path(self) -> str:
        return os.getenv("PROFIT_AND_LOSS_FILE_PATH", "../assets/profit-and-loss.json")  # Default value if not set

    @property
    def balance_sheet_file_path(self) -> str:
        return os.getenv("BALANCE_SHEET_FILE_PATH", "../assets/balance-sheet.json")  # Default value if not set


config = Config()
