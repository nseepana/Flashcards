import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa',
	},
	viewContainer: {
		color: '#999',
		borderBottomColor: '#000000',
		margin: 30
	},
	contentContainer: {
		paddingTop: 16,
	},
	optionIconContainer: {
		marginRight: 12,
	},
	option: {
		backgroundColor: '#fdfdfd',
		paddingHorizontal: 16,
		paddingVertical: 16,
		borderWidth: StyleSheet.hairlineWidth,
		borderBottomWidth: 0,
		borderColor: '#ededed',
	},
	lastOption: {
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	titleHeader: {
		fontSize: 26,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center',
	},
	buttonTitle: {
		fontSize: 16,
		fontWeight: '600',
		lineHeight: 24,
		color: '#fff',
		textAlign: 'center'
	},
	buttonTitleDisabled: {
		color: 'rgba(255, 255, 255, 0.6)'
	},
	buttonBox: {
		height: 48, padding: 10,
		backgroundColor: '#2E78B7',
		marginTop: 10
	},
	buttonBoxDisabled: {
		backgroundColor: 'rgba(46,120,183, 0.6)',

	},
	cardsText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center',
	},
	inputBox: { height: 40, padding: 10, borderColor: 'gray', borderWidth: 1, marginBottom: 30 },
});
