import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    backgroundColor: '#66CCCC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#66CCCC',
    width: '70%',
    paddingVertical: 10,
    fontSize: 16,
    color: '#333333',
  },
  addButton: {
    backgroundColor: '#66CCCC',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskList: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  task: {
    fontSize: 16,
    color: '#333333',
  },
  taskButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
    alignItems: 'center',
    marginRight: 5,
  },
  editButton: {
    // backgroundColor: '#E5FCC2',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    // backgroundColor: '#F38181',
    padding: 5,
    borderRadius: 5,
  },
  
});
