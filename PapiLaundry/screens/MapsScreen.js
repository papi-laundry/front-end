import { View } from "react-native";
import { styles } from '../styles/style';
import { SearchBarFloating } from "../components/SearchBarFloating";
import { useState } from "react";
import Maps from "../components/Maps";

export default function MapsScreen({ navigation }) {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);
    };
    return (
        <>
            <View style={styles.containerMaps}>
                <SearchBarFloating
                    placeholder="Search here..."
                    onChangeText={handleSearch}
                    value={searchText}
                />
                <Maps />
            </View>
        </>

    )
}