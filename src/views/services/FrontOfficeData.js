import VisitorBook from "../../components/forms/frontOffice/VisitorBook";
import CallLog from "../../components/forms/frontOffice/CallLog";
import PostalDispatch from "../../components/forms/frontOffice/PostalDispatch";
import PostalReceive from "../../components/forms/frontOffice/PostalReceive";
import Complaints from "../../components/forms/frontOffice/Complaints";
import Setup from "../../components/forms/frontOffice/Setup";
const FrontOfficeData = [
    {
        text: "Visitor Book",
        icon: "fas fa-cog",
        TagName: VisitorBook,
    },
    {
        text: "Call Log",
        icon: "fas fa-cog",
        TagName: CallLog,
    },
    {
        text: "Postal Dispatch",
        icon: "fas fa-cog",
        TagName: PostalDispatch,
    },
    {
        text: "Postal Receive",
        icon: "fas fa-cog",
        TagName: PostalReceive,
    },
    {
        text: "Complaints",
        icon: "fas fa-cog",
        TagName: Complaints,
    },
    {
        text: "Setup and Configuration",
        icon: "fas fa-cog",
        TagName: Setup,
    },
]
export default FrontOfficeData;