import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";



export default function PreviousCard({ data }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.title}>Typing Test  </Text>
        {!expanded && (
          <View style={styles.badges}>
            <View style={[styles.badge, { backgroundColor: "#e6f4ea" }]}>
              <Text style={[styles.badgeText, { color: "#1e7d34" }]}>
                {data.accuracy}% Accuracy
              </Text>
            </View>
            <View style={[styles.badge, { backgroundColor: "#e8f0fe" }]}>
              <Text style={[styles.badgeText, { color: "#1a73e8" }]}>{data.wpm} WPM</Text>
            </View>
          </View>
        )}
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={22}
          color="#666"
        />
      </TouchableOpacity>

      {/* Expanded body */}
      {expanded && (
        <View style={styles.body}>
          <Text style={styles.detail}>
            <Text style={styles.detailHeading}>Target: </Text>
            {data.target}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.detailHeading}>You Typed: </Text>
            {data.userTyped}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.detailHeading}>Total Words: </Text>
            {data.totalWords}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.detailHeading}>Correct Words: </Text>
            {data.correctWords}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.detailHeading}>Accuracy: </Text>
            {data.accuracy}%
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.detailHeading}>WPM: </Text>
            {data.wpm}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 12,
    padding: 14,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  badges: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginRight: 6,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "600",
  },
  body: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
  },
  detail: {
    fontSize: 14,
    marginVertical: 4,
    color: "#444",
    lineHeight: 20,
  },
  detailHeading: {
    fontWeight: "700",
    color: "#111",
    fontSize: 15,
  },
});
