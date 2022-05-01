import  Link  from "next/link";
import React,{useState} from "react";
import styles from "../styles/Home.module.css";
import { Sidebar } from "./Sidebar";
import CloseIcon from "@mui/icons-material/Close"
// import "../styles/global.css"



function Navbar() {
    const [sidebar,setSideBar]=useState(false)
    const showSidebar=()=>setSideBar(!sidebar)
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <img className={styles.teslaLogo} src='/images/logo.svg' alt="tesla logo" loading="lazy" />
        </a>
      </Link>
      <ul className={styles.navbarNav}>
          <li className={styles.item}>
              <a className={styles.itemLink} href='#'>
                Model S
              </a>
          </li>
          <li className={styles.item}>
              <a className={styles.itemLink} href='#'>
                Model 3
              </a>
          </li>
          <li className={styles.item}>
              <a className={styles.itemLink} href='#'>
                Model X
              </a>
          </li>
          <li className={styles.item}>
              <a className={styles.itemLink} href='#'>
                Model Y
              </a>
          </li>
          <li className={styles.item}>
              <a className={styles.itemLink} href='#'>
                Solar Roof
              </a>
          </li>
          <li className={styles.item}>
              <a className={styles.itemLink} href='#'>
                Solar Panels
              </a>
          </li>
      </ul>
      <div className={styles.menu}>
      <li className={styles.item}>
              <a className={styles.itemLink} href='#'>
                Shop
              </a>
          </li>
          <li className={styles.item}>
              <a className={styles.itemLink} href='#'>
              About
              </a>
          </li>
          <li className={styles.item} onClick={showSidebar}>
              Menu
          </li>
      </div>
      <div className={sidebar ? 'side-menu active' : 'side-menu'}>
          <CloseIcon className="closeIcon" onClick={showSidebar}/>
          <ul className='sidebarNav'>
              {Sidebar.map((item,index)=>(
                  <li className='hamburgerLink' key={index}>
                      <Link href='item.path'>
                          <a>{item.title}</a>
                      </Link>
                  </li>
              ))}
          </ul>

      </div>
    </nav>
  );
}

export default Navbar;
