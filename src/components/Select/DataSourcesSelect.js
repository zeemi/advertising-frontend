import withOptions from "../../hocs/withOptions";
import Select from "./Select";

const DataSourcesSelect = withOptions(Select, 'getDataSources');

export default DataSourcesSelect;