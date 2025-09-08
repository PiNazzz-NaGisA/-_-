import { View, Text } from "react-native"

const PickupSection = () => {
  const experiencePlans = [
    { id: 1, title: "もちパンカフェ", description: "美味しいもちパンを楽しむワークショップ" },
    { id: 2, title: "FLOLA（フローラ）", description: "週1回の物販イベント" },
    // /** rest of code here **/
  ]

  return (
    <View>
      {experiencePlans.map((plan) => (
        <View key={plan.id}>
          <Text>{plan.title}</Text>
          <Text>{plan.description}</Text>
        </View>
      ))}
    </View>
  )
}

export default PickupSection
