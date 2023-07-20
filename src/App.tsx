import { 
    Refine,
} from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

    import { ErrorComponent
,ThemedLayoutV2,
ThemedTitleV2} from '@refinedev/mui';

import dataProvider from "@refinedev/simple-rest";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, { NavigateToResource, UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/react-router-v6";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Header } from "./components/header";
import { FumosCreate, FumosEdit, FumosList, FumosShow } from './pages/fumos';
import { RefineSnackbarProvider } from '@refinedev/mui';
import { AppIcon } from './components/app-icon';




function App() {
    

    
    
    return (
        <BrowserRouter>
        <RefineKbarProvider>
            <ColorModeContextProvider>
<CssBaseline />
<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
<RefineSnackbarProvider>
            <Refine dataProvider={dataProvider("https://fumo-mock-api.vicotrio.repl.co")}
    routerProvider={routerBindings} 
                    resources={[{
                        name: "fumos",
                        list: "/fumos",
                        create: "/fumos/create",
                        edit: "/fumos/edit/:id",
                        show: "/fumos/show/:id",
                    }
                , ]}
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >

                <Routes>
                    <Route
                        element={(
                                <ThemedLayoutV2
                                Title={({collapsed}) =>{return <ThemedTitleV2 collapsed={collapsed} text="Fumo dashboard" icon={<AppIcon/>}/>}}

                                    Header={() => <Header sticky />}
                                >
                                    <Outlet />
                                </ThemedLayoutV2>
                        )}
                    >
                        <Route index element={
                                <NavigateToResource resource="fumos" />
                        } />
                        <Route path="/fumos">
                            <Route index element={<FumosList />} />
                            <Route path="create" element={<FumosCreate />} />
                            <Route path="edit/:id" element={<FumosEdit />} />
                            <Route path="show/:id" element={<FumosShow />} />
                        </Route>


                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes> 

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
            </Refine>
            </RefineSnackbarProvider>


</ColorModeContextProvider>
        </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
