import { StyleSheet, Platform } from 'react-native';
import { appTheme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  button: {
    backgroundColor: appTheme.colors.secondary,
    paddingVertical: appTheme.spacing.md,
    paddingHorizontal: appTheme.spacing.lg,
    borderRadius: appTheme.roundness,
    alignSelf: 'center',
    marginVertical: appTheme.spacing.lg,
  },
  buttonClose: {
    backgroundColor: appTheme.colors.danger,
  },
  buttonText: {
    color: appTheme.colors.buttonText,
    fontSize: appTheme.typography.size.md,
    fontFamily: appTheme.typography.family.regular,
  },
  sheetContent: {
    flex: 1,
    paddingHorizontal: appTheme.spacing.lg,
  },
  sheetTitle: {
    fontSize: appTheme.typography.size.lg,
    fontFamily: appTheme.typography.family.bold,
    marginVertical: appTheme.spacing.md,
    alignSelf: 'center',
  },
  listContainer: {
    paddingBottom: appTheme.spacing.xxl,
  },
  itemContainer: {
    padding: appTheme.spacing.md,
    marginVertical: appTheme.spacing.sm,
    backgroundColor: appTheme.colors.background,
    borderRadius: appTheme.radius.lg,
    ...Platform.select({
      ios: {
        shadowColor: appTheme.colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  dateText: {
    fontSize: appTheme.typography.size.md,
    color: appTheme.colors.subtitle,
    marginBottom: appTheme.spacing.sm,
  },
  levelText: {
    fontSize: appTheme.typography.size.md,
    fontFamily: appTheme.typography.family.bold,
  },
  bottomSheetContainer: {
    paddingBottom: appTheme.spacing.xxl,
  },
});
