import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Logo</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">رئيسي</p>
          <li>
            <i className="pi pi-comments"></i>
            <span>لوحة التحكم</span>
          </li>
          <p className="title">قوائم</p>
          {/* <Link to="/users" style={{ textDecoration: "none" }}> */}
          <li>
            <i className="pi pi-cloud-download"></i>
            <span>مستخدمون</span>
          </li>
          {/* </Link> */}
          {/* <Link to="/products" style={{ textDecoration: "none" }}> */}
          <li>
            <i className="pi pi-compass"></i>
            <span>منتجات</span>
          </li>
          {/* </Link> */}
          <li>
            <i className="pi pi-copy"></i>
            <span>طلبات</span>
          </li>
          <li>
            <i className="pi pi-facebook"></i>
            <span>توصيلات</span>
          </li>
          <p className="title">استخدام</p>
          <li>
            <i className="pi pi-credit-card"></i>
            <span>حالات</span>
          </li>
          <li>
            <i className="pi pi-heart"></i>
            <span>إشعارات</span>
          </li>
          <p className="title">خدمات</p>
          <li>
            <i className="pi pi-check"></i>
            <span>نظام رعاية</span>
          </li>
          <li>
            <i className="pi pi-plus"></i>
            <span>سجلات</span>
          </li>
          <li>
            <i className="pi pi-question"></i>
            <span>إعدادات</span>
          </li>
          <p className="title">مستخدم</p>
          <li>
            <i className="pi pi-check"></i>
            <span>ملف شخصي</span>
          </li>
          <li>
            <i className="pi pi-check"></i>
            <span>تسجيل خروج</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
