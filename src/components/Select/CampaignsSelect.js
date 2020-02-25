import withOptions from "../../hocs/withOptions";
import Select from "./Select";

const CampaignsSelect = withOptions(Select, 'getCampaigns');

export default CampaignsSelect;