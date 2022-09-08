import { Main } from "./Main"

export const SideBar = () => {
    return (
        <div style={{display: "flex", height: "80vh"}}>
            <div style={{width: "10vw", backgroundColor: "lightgreen"}}>
            Sidebar
            </div>
            <Main />
        </div>
    )
}