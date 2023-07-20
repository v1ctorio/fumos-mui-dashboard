import { IResourceComponentsProps } from "@refinedev/core";
import { MuiEditInferencer } from "@refinedev/inferencer/mui";


export const FumosEdit: React.FC<IResourceComponentsProps> = () => {
    return <MuiEditInferencer 
    hideCodeViewerInProduction={true}

/>;
};
