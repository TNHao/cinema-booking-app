import baseServices from "services/baseServices";

class QuanLyFood extends baseServices{


    fetchGetListFood = () => {
        return this.getMock('/food')
    }
}

export const quanLyFood = new QuanLyFood()