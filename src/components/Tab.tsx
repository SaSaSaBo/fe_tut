/* eslint-disable no-useless-rename */
import React, { ReactElement, ReactNode, useEffect, useState } from 'react'

// We define the Tab Props and TabPanel Props interfaces
interface TabProps {
    activeTab: number;
    children: ReactElement<TabPanelProps>[]; // We specify that there will be Tab.Panel components
    setActiveTab: (activeTab: number) => void;
}
  
interface TabPanelProps {
    children: ReactNode;
    title: string; // We added a prop for the tab title
}

function Tab({ activeTab, children, setActiveTab }: TabProps) {

    useEffect(() => {
        setActiveTab(activeTab);
    }, [activeTab]);    
// Got so mix i don't even know what i did.
    return (
        <div>
            <nav>
            {children.map((tab, index) => (
                <button
                onClick={() => setActiveTab(index)}
                key={index}
                className={activeTab === index ? 'bg-green-300' : 'bg-red-300'}
                >
                {tab.props.title}
                </button>
            ))}
            </nav>
            {children[activeTab]}
        </div>
    );
}
    
    // We define the Tab.Panel component
Tab.Panel = function ({ children }: TabPanelProps) {
    return <div>{children}</div>;
};

export default Tab
