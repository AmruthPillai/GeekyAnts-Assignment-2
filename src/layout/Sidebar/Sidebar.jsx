/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './Sidebar.css';
import SidebarCard from '../../components/SidebarCard/SidebarCard';
import SubmenuItem from '../../components/SubmenuItem/SubmenuItem';
import DashboardIcon from '../../assets/icons/dashboard.svg';
import PagesIcon from '../../assets/icons/pages.svg';
import EmailIcon from '../../assets/icons/email.svg';
import ProjectsIcon from '../../assets/icons/projects.svg';
import ChatsIcon from '../../assets/icons/chats.svg';
import InvoiceIcon from '../../assets/icons/invoice.svg';
import SettingsIcon from '../../assets/icons/settings.svg';

export default function Sidebar() {
  const [selected, setSelected] = useState(false);

  return (
    <div id="Sidebar">
      {
        !selected && (
          <div className="row mt-4 ml-2">
            <SidebarCard active icon={DashboardIcon} title="Dashboard" />
            <SidebarCard onClick={() => setSelected(!selected)} icon={PagesIcon} title="Pages" />
            <SidebarCard onClick={() => setSelected(!selected)} icon={PagesIcon} title="Components" />
            <SidebarCard onClick={() => setSelected(!selected)} icon={EmailIcon} title="Email" />
            <SidebarCard onClick={() => setSelected(!selected)} icon={ProjectsIcon} title="Projects" />
            <SidebarCard onClick={() => setSelected(!selected)} icon={ChatsIcon} title="Chats" />
            <SidebarCard onClick={() => setSelected(!selected)} icon={InvoiceIcon} title="Invoice" />
            <SidebarCard onClick={() => setSelected(!selected)} icon={SettingsIcon} title="Settings" />
          </div>
        )
      }

      {
        selected && (
          <div className="mt-4 ml-4">
            <div onClick={() => setSelected(!selected)} className="w-100 card border-0 shadow-sm d-flex flex-row justify-content-between align-items-center py-4 cursor-pointer">
              <i className="material-icons text-dark ml-3">chevron_left</i>
              <h6 className="font-weight-bold mb-0">Components</h6>
              <div className="px-3" />
            </div>
            <div className="row mt-3 px-1">
              <SubmenuItem active title="Base" />
              <SubmenuItem title="Calendar" />
              <SubmenuItem title="Icons" />
              <SubmenuItem title="Widgets" />
              <SubmenuItem title="Cards" />
              <SubmenuItem title="Carousel" />
              <SubmenuItem title="Light Box" />
              <SubmenuItem title="Modals" />
              <SubmenuItem title="Progress Bars" />
              <SubmenuItem title="Typography" />
              <SubmenuItem title="Tabs" />
              <SubmenuItem title="Colors" />
            </div>
          </div>
        )
      }
    </div>
  );
}
