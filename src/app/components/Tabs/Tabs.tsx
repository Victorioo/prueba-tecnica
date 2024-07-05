// components/Tabs.js
"use client";
import Tab from "./types";

import { useState } from "react";
import styles from "./tabs.module.css";

const Tabs = ({ data }: { data: Tab[] }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const renderContent = () => {
    const tab = data.find((tab) => tab.id === activeTab);
    return tab?.content || "Sin contenido por ahora";
  };

  const handleTabClick = (index: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveTab(index);
      setTransitioning(false);
    }, 200); // La duración debe coincidir con la animación en CSS
  };

  const changeTab = (id: number) => {
    if (id === activeTab) return;
    handleTabClick(id);
  };

  return (
    <section>
      <nav className={styles.tabs}>
        {data.map((tab) => (
          <a
            href="#"
            key={tab.id}
            className={
              styles.button + (tab.id === activeTab ? ` ${styles.active}` : "")
            }
            onClick={() => changeTab(tab.id)}
          >
            {tab.title}
          </a>
        ))}
      </nav>
      <article
        className={`${styles.content} ${
          transitioning ? styles.transitioning : ""
        }`}
      >
        {renderContent()}
      </article>
    </section>
  );
};

export default Tabs;
