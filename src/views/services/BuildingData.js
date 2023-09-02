import AddExpense from "../../components/forms/expenses/AddExpene";
import SearchExpense from "../../components/forms/expenses/SearchExpense";
import ExpenseHead from "../../components/forms/expenses/ExpenseHead";
import AddBuildingRoom from "../../components/forms/building/AddBuildingRoom";
import RoomType from "../../components/forms/building/RoomType";
import AddBuilding from "../../components/forms/building/AddBuilding";
const BuildingData=[
    {
        text:"Building Rooms",
        icon:"fas fa-cog",
        TagName:AddBuildingRoom,

    },
    {
        text:"Room Type",
        icon:"fas fa-cog",
        TagName:RoomType,
    },
    {
        text:"Add Building",
        icon:"fas fa-cog",
        TagName:AddBuilding,
    },
    {
        text:"Employee Building Report",
        icon:"fas fa-cog",
        TagName:ExpenseHead,
    },

]
export default BuildingData;