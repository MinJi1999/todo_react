import * as React from "react";
function Menu(){
    const [menuContainerShowing, setMenuContainerShowing] = React.useState(false); //menu container show
    const [deleteBtn, setDeleteBtn] = React.useState(false); //delete button in menu container

    const menuIcon = () => {
        setMenuContainerShowing(true);
    }

    const menuDeleteBtn = () => {
        setMenuContainerShowing(false);
        setDeleteBtn(false);
    }
    return(
        <>
            {
                menuContainerShowing ?
                    <nav className="menu_container" >
                        <div className="menu_delete_btn" onClick={menuDeleteBtn}></div>
                        <div className="menu_delete_btn2" onClick={menuDeleteBtn}></div>
                        <a className="top_menu_item" href="./profile/index.html">profile</a>
                        <a className="top_menu_item" href="./album">album</a>
                        <a className="top_menu_item" href="./message">message</a>
                        <a className="top_menu_item" href="./게임/index.html">game</a>
                    </nav>
                :
                    <div className="menu_icon" onClick={menuIcon}>
                        <div className="menu_icon_line"></div>
                        <div className="menu_icon_line"></div>
                        <div className="menu_icon_line"></div>
                        <div className="menu_icon_line"></div>
                    </div>
            }
            {
                deleteBtn ?
                    <nav className="menu_container" >
                        <div className="menu_delete_btn" onClick={menuDeleteBtn}></div>
                        <div className="menu_delete_btn2" onClick={menuDeleteBtn}></div>
                        <a className="top_menu_item" href="./profile/index.html">profile</a>
                        <a className="top_menu_item" href="./album">album</a>
                        <a className="top_menu_item" href="./message">message</a>
                        <a className="top_menu_item" href="./게임/index.html">game</a>
                    </nav> 
                :
                    null
            }
        </>
    )
}
export default Menu;