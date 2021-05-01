import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
  btnContainer: {
    marginTop: 50,
    marginLeft: 20,
    flexDirection: 'row',
  },
  btnSection: {
    marginRight: 20,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6767d7',
  },
  btnText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;