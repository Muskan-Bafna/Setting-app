import React from "react";
import { ReactDOM } from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "react-router-dom";
import { MyFunctionalComponent } from "./Home";
import { PersonalHotspot } from "./PersonalHotspot";
import { HotspotConfiguration } from "./HotspotConfiguration";
import { DataUse } from "./DataUse";
import { ConnectionsAllowed } from "./ConnectionsAllowed";
import { OffHotspot } from "./OffHotspot";
import { SharingMode } from "./SharingMode";
import { Help } from "./Help";
import { AboutPhone } from "./AboutPhone";
import { SimOneStatus } from "./SimOneStatus";
import { SimTwoStatus } from "./SimTwoStatus";
import { IPAddress } from "./IPAddress";
import { LegalInfo } from "./LegalInfo";
import { SoundAndVibration } from "./SoundAndVibration";
import { DialpadTouchTone } from "./DialpadTouchTone";
import { NotificationRingtone } from "./NotificationRingtone";
import { CalenderAlertRingtone } from "./CalenderAlertRingtone";
import { RingtoneReminder } from "./RingtoneReminder";
import { SimOneCallRing } from "./SimOneCallRing";
import { SimTwoCallRing } from "./SimTwoCallRing";
import { BtnToAdjust } from "./BtnToAdjust";
import { DisplayAndBrightness } from "./DisplayAndBrightness";
import { EyeProtection } from "./EyeProtection";
import { DarkMode } from "./DarkMode";
import { AutoLock } from "./AutoLock";
import { FontStyle } from "./FontStyle";
import { Bluetooth } from "./Bluetooth";
import { MsgTone } from "./MsgTone";
import { TwoMsgTone } from "./TwoMsgTone";
import { FontSize } from "./FontSize";
import { Pair } from "./Pair";
import Axios from "axios";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyFunctionalComponent />} />
      <Route path="/personal" element={<PersonalHotspot />} />
      <Route path="/hotspotconfiguration" element={<HotspotConfiguration />} />
      <Route path="/datause" element={<DataUse />} />
      <Route path="/connectionsallowed" element={<ConnectionsAllowed />} />
      <Route path="/offhotspot" element={<OffHotspot />} />
      <Route path="/sharingmode" element={<SharingMode />} />
      <Route path="/help" element={<Help />} />
      <Route path="/aboutphone" element={<AboutPhone />} />
      <Route path="/simonestatus" element={<SimOneStatus />} />
      <Route path="/simtwostatus" element={<SimTwoStatus />} />
      <Route path="/ipaddress" element={<IPAddress />} />
      <Route path="/legalinfo" element={<LegalInfo />} />
      <Route path="/sound" element={<SoundAndVibration />} />
      <Route path="/dialpad" element={<DialpadTouchTone />} />
      <Route path="/notificationringtone" element={<NotificationRingtone />} />
      <Route
        path="/calenderalertringtone"
        element={<CalenderAlertRingtone />}
      />
      <Route path="/ringtonereminder" element={<RingtoneReminder />} />
      <Route path="/simonecallring" element={<SimOneCallRing />} />
      <Route path="/simtwocallring" element={<SimTwoCallRing />} />
      <Route path="/btntoadjust" element={<BtnToAdjust />} />
      <Route path="/display" element={<DisplayAndBrightness />} />
      <Route path="/eyeprotection" element={<EyeProtection />} />
      <Route path="/darkmode" element={<DarkMode />} />
      <Route path="/autolock" element={<AutoLock />} />
      <Route path="/fontstyle" element={<FontStyle />} />
      <Route path="/bluetooth" element={<Bluetooth />} />
      <Route path="/msgtone" element={<MsgTone />} />
      <Route path="/twomsgtone" element={<TwoMsgTone />} />
      <Route path="/fontsize" element={<FontSize />} />
      <Route path="/pair" element={<Pair />} />
    </Routes>
  );
}
export { App };
