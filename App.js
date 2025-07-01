import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Cover Photo */}
      <Image source={require('./assets/cover.jpg')} style={styles.coverImage} />

      {/* Profile Image */}
      <View style={styles.profileImageWrapper}>
        <Image source={require('./assets/1.jpg')} style={styles.profileImage} />
      </View>

      {/* Info */}
      <View style={styles.infoBox}>
        <Text style={styles.nameText}>ชื่อ : นาย กฤตชวกร ชวลิตกิตติวงศ์</Text>
        <Text style={styles.studentText}>รหัสนักศึกษา : 653450279-6</Text>
        <Text style={styles.studentText}>สาขา : วิทยาการคอมพิวเตอร์และสาระสนเทศ</Text>
        <Text style={styles.studentText}>มหาวิทยาลัย : ขอนแก่นวิทยาเขตหนองคาย</Text>
      </View>
      {/* Bio Box */}
      <View style={styles.bioBox}>
        <Text style={styles.sectionTitle}>🧾 เกี่ยวกับฉัน</Text>
        <Text style={styles.bioText}>
          นักเรียนผู้มีความสนใจในสายงานเทคโนโลยี ชื่นชอบการออกแบบ เขียนโค้ด และเรียนรู้สิ่งใหม่ๆผ่านโลกอินเตอร์เน็ต และใช้งาน Prompt AI เป็น
        </Text>
      </View>

      {/* Skill Chart */}
      <View style={styles.skillBox}>
        <Text style={styles.sectionTitle}>📊 ความสามารถ</Text>

        {renderSkillBar('💻Coding', 40)}
        {renderSkillBar('📝Writing', 50)}
        {renderSkillBar('🎨Design', 60)}
        {renderSkillBarWithIcon(require('./assets/illustrator.png'), 70)}
        {renderSkillBarWithIcon(require('./assets/chatgpt.png'), 70)}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

function renderSkillBar(label, value) {
  return (
    <View style={styles.skillItem} key={label}>
      <View style={styles.skillLabelWrapper}>
        <Text style={styles.skillLabel}>{label}</Text>
      </View>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${value}%` }]} />
      </View>
    </View>
  );
}

function renderSkillBarWithIcon(iconSource, value) {
  return (
    <View style={styles.skillItem} key={value + Math.random()}>
      <View style={styles.skillLabelWrapper}>
        <Image source={iconSource} style={styles.icon} />
      </View>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${value}%` }]} />
      </View>
    </View>
  );
}


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
    alignItems: 'center',
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  profileImageWrapper: {
    marginTop: -60,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#FFF5E1',
    overflow: 'hidden',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  studentText: {
    fontSize: 18,
    color: '#A0522D',
  },
  bioBox: {
    marginTop: 20,
    backgroundColor: '#FFE4B5',
    padding: 15,
    borderRadius: 12,
    width: '90%',
  },
  bioText: {
    fontSize: 16,
    color: '#5C4033',
    marginTop: 6,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D2691E',
  },
  infoBox: {
    marginTop: 20,
    backgroundColor: '#FFF0D9', // สีพีชอ่อน
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  
  skillBox: {
    marginTop: 20,
    backgroundColor: '#FFEAD0', // สีส้มอ่อนอมชมพู (ต่างจาก bio)
    padding: 15,
    borderRadius: 12,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  
  skillLabelWrapper: {
    width: 80, // กำหนดความกว้างเท่ากันทั้ง text และ icon
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  
  skillLabel: {
    fontSize: 16,
    color: '#5C4033',
    textAlign: 'center',
  },
  
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  
  barBackground: {
    flex: 1,
    height: 14,
    backgroundColor: '#FFDAB9',
    borderRadius: 6,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  
  barFill: {
    height: '100%',
    backgroundColor: '#FF8C00',
    borderRadius: 6,
  },
  
});