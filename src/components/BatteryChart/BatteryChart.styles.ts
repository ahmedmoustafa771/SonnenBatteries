import { StyleSheet } from 'react-native';
import { appTheme } from '../../theme';

export const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'flex-start',
    marginBottom: appTheme.spacing.md,
  },
  valueLabel: {
    fontSize: appTheme.typography.size.xl,
    fontFamily: appTheme.typography.family.bold,
    color: appTheme.colors.primary,
  },
  greenText: {
    color: appTheme.colors.success,
  },
  redText: {
    color: appTheme.colors.danger,
  },
  timeText: {
    fontSize: appTheme.typography.size.sm,
    color: appTheme.colors.subtitle,
  },
  chartContainer: {
    height: 300,
  },
});
