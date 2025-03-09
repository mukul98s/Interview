from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from service import read_json_file
from config import config
import uvicorn
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/quickbooks/profit-and-loss")
async def read_profit_and_loss():
    file_path = config.profit_and_loss_file_path
    try:
        result = read_json_file(file_path)
        return result
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="File not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Error reading JSON data")


@app.get("/quickbooks/balance-sheet")
async def read_balance_sheet():
    file_path = config.balance_sheet_file_path
    try:
        result = read_json_file(file_path)
        return result
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="File not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Error reading JSON data")


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
