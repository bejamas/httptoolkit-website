import * as React from 'react';

import { SupportedTools, SupportedTool } from "./supported-tools";

export const ElectronSupportedTools = () => <SupportedTools>
    <SupportedTool>Renderer requests</SupportedTool>
    <SupportedTool>Main process requests</SupportedTool>
    <SupportedTool>Request</SupportedTool>
    <SupportedTool>Axios</SupportedTool>
    <SupportedTool>Fetch & Node-Fetch</SupportedTool>
    <SupportedTool>Http & Https built-in modules</SupportedTool>
    <SupportedTool>Superagent</SupportedTool>
    <SupportedTool>Reqwest</SupportedTool>
    <SupportedTool>Got</SupportedTool>
    <SupportedTool>Needle</SupportedTool>
    <SupportedTool>Bent</SupportedTool>
    <SupportedTool>Unirest</SupportedTool>
    <SupportedTool>Spawned subprocesses</SupportedTool>
</SupportedTools>