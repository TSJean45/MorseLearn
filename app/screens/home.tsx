import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { COLORS } from '@/constants/Colors';
import auth from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { addPoints, setStreak } from '@/redux/actions/userActions';

export default function Home() {
  const dispatch = useDispatch();
  const { points, streak } = useSelector((state: RootState) => state.user);
  const user = auth().currentUser;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>{user?.email}</Text>
        </View>
        <View style={styles.headerIcons}>
          <Icon 
            name="diamond" 
            type="material-community" 
            color={COLORS.red} 
            size={28} 
          />
          <Text style={styles.points}>{points}</Text>
          <Icon 
            name="notifications-none" 
            type="material" 
            color={COLORS.text.primary} 
            size={28} 
            containerStyle={{ marginLeft: 15 }}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Streak Card */}
        <Card containerStyle={styles.streakCard}>
          <View style={styles.streakContent}>
            <Icon name="local-fire-department" color={COLORS.red} size={40} />
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.streakDays}>{streak} Days</Text>
              <Text style={styles.streakText}>Keep the streak going!</Text>
            </View>
          </View>
        </Card>

        {/* Progress Card */}
        <Card containerStyle={styles.progressCard}>
          <Text style={styles.cardTitle}>Daily Progress</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '70%' }]} />
          </View>
          <Text style={styles.progressText}>7/10 lessons completed</Text>
        </Card>

        {/* Daily Goals */}
        <Text style={styles.sectionTitle}>Daily Goals</Text>
        <Card containerStyle={styles.goalsCard}>
          <View style={styles.goalItem}>
            <Icon name="translate" color={COLORS.red} size={24} />
            <Text style={styles.goalText}>Complete 3 lessons</Text>
            <Text style={styles.goalProgress}>2/3</Text>
          </View>
          <View style={styles.goalItem}>
            <Icon name="timer" color={COLORS.blue} size={24} />
            <Text style={styles.goalText}>Practice for 10 mins</Text>
            <Text style={styles.goalProgress}>5/10</Text>
          </View>
        </Card>

        {/* Continue Learning */}
        <Text style={styles.sectionTitle}>Continue Learning</Text>
        <Card containerStyle={styles.lessonCard}>
          <View style={styles.lessonContent}>
            <View>
              <Text style={styles.lessonTitle}>Basic Morse Alphabet</Text>
              <Text style={styles.lessonProgress}>Progress: 70%</Text>
            </View>
            <Button
              icon={<Icon name="play-circle-filled" color={COLORS.text.light} />}
              buttonStyle={styles.continueButton}
            />
          </View>
        </Card>

        {/* Quick Practice */}
        <Text style={styles.sectionTitle}>Quick Practice</Text>
        <View style={styles.practiceGrid}>
          <Card containerStyle={[styles.practiceCard, { backgroundColor: COLORS.red }]}>
            <Icon name="translate" color={COLORS.text.light} size={32} />
            <Text style={styles.practiceTitle}>Translator</Text>
          </Card>
          <Card containerStyle={[styles.practiceCard, { backgroundColor: COLORS.blue }]}>
            <Icon name="school" color={COLORS.text.light} size={32} />
            <Text style={styles.practiceTitle}>Quiz</Text>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: COLORS.text.secondary,
  },
  username: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text.primary,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    marginLeft: 5,
    color: COLORS.red,
    fontWeight: '600',
  },
  streakCard: {
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 0,
    marginBottom: 15,
    backgroundColor: COLORS.pink,
    borderWidth: 0,
    elevation: 2,
  },
  streakContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakDays: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text.primary,
  },
  streakText: {
    color: COLORS.text.secondary,
  },
  progressCard: {
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 0,
    backgroundColor: COLORS.lightPink,
    borderWidth: 0,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
  },
  progress: {
    height: '100%',
    backgroundColor: COLORS.red,
    borderRadius: 4,
  },
  progressText: {
    marginTop: 10,
    color: COLORS.text.secondary,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 15,
    marginLeft: 5,
  },
  goalsCard: {
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 0,
    backgroundColor: COLORS.gray,
    borderWidth: 0,
    elevation: 2,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  goalText: {
    flex: 1,
    marginLeft: 10,
    color: COLORS.text.primary,
  },
  goalProgress: {
    color: COLORS.text.secondary,
    fontWeight: '600',
  },
  lessonCard: {
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 0,
    backgroundColor: COLORS.pink,
    borderWidth: 0,
    elevation: 2,
  },
  lessonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  lessonProgress: {
    color: COLORS.text.secondary,
  },
  continueButton: {
    backgroundColor: COLORS.red,
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  practiceGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  practiceCard: {
    width: '47%',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    borderWidth: 0,
    elevation: 2,
  },
  practiceTitle: {
    color: COLORS.text.light,
    marginTop: 10,
    fontWeight: '600',
  },
}); 