import { SafeAreaView } from "react-native-safe-area-context";
import CustomFlatList from "@/components/CustomFlatList/CustomFlatList";
import { FlatList, StyleSheet, View, Text, ScrollView } from "react-native";
import HeaderHome from "@/components/home/header.home";
import SearchHome from "@/components/home/search.home";
import TopListHome from "@/components/home/toplist.home";
import CollectionHome from "@/components/home/collection.home";


const data = [
  { key: 1, name: "Top Quán Rating 5* tuần này",description: "Top Quán Rating 5* tuần này", refAPI: "top-rating" },
  { key: 2, name: "Quán Mới Lên Sàn", description: "Quán Mới Lên Sàn. Ăn thôi nào", refAPI: "newcomer" },
  { key: 3, name: "Ăn Thỏa Thích, Freeship 0Đ",description: "Nước trái cây, bánh ngọt, bim bim,...", refAPI: "top-freeship" },
 ]
const HomeTab = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomFlatList
        data={data}
        style={styles.list}
        renderItem={({ item }) => <CollectionHome name={item.name} description={item.description} refAPI={item.refAPI}/>}
        HeaderComponent={<HeaderHome/>}
        StickyElementComponent={<SearchHome/>}
        TopListElementComponent={<TopListHome />}
      />
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ecf0f1",
      flex: 1,
      justifyContent: "center",
      overflow: "hidden",
      padding: 8
    },
    header: {
      borderColor: "red",
      borderWidth: 5,
      height: 100,
      marginBottom: 6,
      width: "100%"
    },
    item: {
      borderColor: "green",
      borderWidth: 1,
      height: 250,
      marginBottom: 10,
      width: "100%"
    },
    list: {
      overflow: "hidden"
    },
    sticky: {
      backgroundColor: "#2555FF50",
      borderColor: "blue",
      borderWidth: 5,
      height: 100,
      marginBottom: 6,
      width: "100%"
    },
    
  });
  
export default HomeTab