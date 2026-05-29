import { BrowserRouter, Routes, Route } from "react-router-dom";

import Services from "./Services";
import AppliedAI from "./AppliedAI";
import DataAnalyticsAI from "./DataAnalyticsAI";
import EnergyTransition from "./EnergyTransition";
import DigitalCommerce from "./DigitalCommerce";
import DigitalInteraction from "./DigitalInteraction";
import DigitalExperience from "./DigitalExperience";
import DigitalProcessAutomation from "./DigitalProcessAutomation";
import DigitalSupplyChain from "./DigitalSupplyChain";
import DigitalWorkplaceServices from "./DigitalWorkplaceServices";
import Infosysmetaverse from "./Infoysmetaverse";
import InfosysGenerativeAI from "./InfosysGenerativeAI";
import InfosysTopaz from "./InfosysTopaz";
import EngineeringServices from "./EngineeringServices";
import IncubatingEmergingOfferings from "./IncubatingEmergingOfferings";
import QualityEngineering from "./QualityEngineering";
import MicrosoftBussinessApplicationServices from "./MicrosoftBussinessApplicationServices";
import MicrosoftCloudBussiness from "./MicrosoftCloudBussiness";
import NetworkTransformation from "./NetworkTransformation";
import Oracle from "./Oracle";
import Salesforce from "./Salesforce";
import SAP from "./SAP";
import APIEconomy from "./APIEconomy";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Services />}
        />

        <Route
          path="/applied-ai"
          element={<AppliedAI />}
        />

        <Route
          path="/dataanalytics-ai"
          element={<DataAnalyticsAI />}
        />

        <Route
          path="/energy-transition"
          element={<EnergyTransition />}
        />

        <Route
          path="/digital-commerce"
          element={<DigitalCommerce />}
        />
      
        
        <Route
          path="/digital-interaction"
          element={<DigitalInteraction />}
        />

        <Route
          path="/digital-experience"
          element={<DigitalExperience />}
        />

        <Route
          path="/digital-process-automation"
          element={<DigitalProcessAutomation />}
        />

         <Route
          path="/digital-supply-chain"
          element={<DigitalSupplyChain />}
        />

        <Route
          path="/digital-workplace-services"
          element={<DigitalWorkplaceServices />}
        />
        
        <Route
          path="/infosys-metaverse"
          element={<Infosysmetaverse />}
        />

         <Route
          path="/infosys-generative-ai"
          element={<InfosysGenerativeAI />}
        />

        <Route
          path="/infosys-topaz"
          element={<InfosysTopaz/>}
        />

         <Route
          path="/engineering-services"
          element={<EngineeringServices/>}
        />

        <Route
          path="/incubating-emerging-offerings"
          element={<IncubatingEmergingOfferings/>}
        />

         <Route
          path="/quality-engineering"
          element={<QualityEngineering/>}
        />

        <Route
          path="/microsoft-bussiness-application-services"
          element={<MicrosoftBussinessApplicationServices/>}
        />

        
        <Route
          path="/microsoft-cloud-bussiness"
          element={<MicrosoftCloudBussiness/>}
        />

        <Route
          path="/network-transformation"
          element={<NetworkTransformation/>}
        />

        <Route
          path="/oracle"
          element={<Oracle/>}
        />

          <Route
          path="/salesforce"
          element={<Salesforce />}
        />
         
          <Route
          path="/sap"
          element={<SAP/>}
        />

        <Route
          path="/apieconomy"
          element={<APIEconomy/>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;