from fastapi import FastAPI, Body, Request, Header, HTTPException, status
from pydantic import BaseModel
from typing import Dict


class InsertCar(BaseModel):
    brand: str
    model: str
    year: int


class InsertUser(BaseModel):
    username: str
    name: str


app = FastAPI()


@app.post("/cars")
async def new_car(car: InsertCar):
    print(car)
    return {
        "message":car
    }


@app.get("/cars")
async def raw_request(request:Request):
    return {
        "message":request.base_url,
        "all":dir(request)
    }


@app.post("/car/user")
async def new_car_model(
    car: InsertCar,
    user: InsertUser,
    code: int=Body(None) ):
    return {
        "car":car,
        "user":user,
        "code":code+1
    }


@app.get("/headers")
async def read_headers(user_agent: str | None = Header(None)):
    return {"User-Agent": user_agent}


@app.post("/carsmodel")
async def new_car_model(car:InsertCar):
    if car.year>2022:
        raise HTTPException(
        status.HTTP_406_NOT_ACCEPTABLE,
        detail="The car doesn’t exist yet!"
    ) 
    return {
        "message":car
    }
