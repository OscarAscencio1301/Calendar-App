import { Auth } from "./auth";
import { Calendars } from "./calendar";
import { Components } from "./components";

export interface Global {
    auth: Auth,
    components: Components
    calendar: Calendars
}