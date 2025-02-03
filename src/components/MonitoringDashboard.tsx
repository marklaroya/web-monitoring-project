import React from 'react';
import SmartContent from './SmartContent';
import './MonitoringDashboard.css';

interface MonitoringDashboardProps {
    selectedProvider: string;
}

const MonitoringDashboard: React.FC<MonitoringDashboardProps> = ({ selectedProvider }) => {
    return (
        <main className="dashboard-main">
            {selectedProvider === 'SMART' && <SmartContent />}
            {/* Add similar conditional rendering for DITO and GLOBE */}
        </main>
    );
};

export default MonitoringDashboard;