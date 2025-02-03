import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import MonitoringDashboard from '../components/MonitoringDashboard';

const HomePage: React.FC = (): React.ReactElement => {
    const [selectedProvider, setSelectedProvider] = useState<string>('SMART');

    return (
        <div>
            <NavBar onSelectProvider={setSelectedProvider} />
            <MonitoringDashboard selectedProvider={selectedProvider} />
        </div>
    );
};

export default HomePage;