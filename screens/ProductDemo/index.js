import React from "react"
import {
  SafeAreaView,
  View,
  Button,
  Text,
  StyleSheet,
  FlatList
} from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit"
import {
  api_v1_product_list,
  api_v1_product_create
} from "@store/alineAppAprilAPI/products.slice"

const ProductComponent = () => {
  const { entities, api } = useSelector(state => state.products)
  const dispatch = useDispatch()

  const onUpdate = async () => {
    try {
      const resultAction = await dispatch(api_v1_product_list())
      // In case you need to access the newly returned value by the api call, use the code below:
      const products = unwrapResult(resultAction)
      console.log(
        "success",
        `Refreshed procuts list: ${products.length} before was ${entities.length}`
      )
      // end
    } catch (err) {
      console.log("error", `Fetch failed: ${err.message}`)
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text>Name: {item.name}</Text>
      <Text>Description: {item.description}</Text>
      <Text>
        Quantity: {item.quantity} || Price: $ {item.price}
      </Text>
    </View>
  )

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text>There are {entities.length} available products.</Text>
        <FlatList
          data={entities}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
        <View style={styles.buttons}>
          <Button style={styles.button} title="Refresh" onPress={onUpdate} />
          <Button
            title="Create New Pants Product"
            onPress={() =>
              dispatch(
                api_v1_product_create({
                  data: {
                    name: "Pants",
                    description: "Some Pants.",
                    price: "233.00",
                    quantity: 50
                  }
                })
              )
            }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#d4f2e5",
    marginBottom: 5,
    borderColor: "#a9c1b7",
    borderWidth: 1
  },
  text: {
    fontSize: 28,
    color: "#ffffff"
  },
  button: {
    margin: 15
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 130,
    marginTop: 10
  },
  body: {
    padding: 10,
    fontSize: 16
  }
})

export default ProductComponent
