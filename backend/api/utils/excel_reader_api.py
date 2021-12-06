class Teacher:
    teacher_id = ""
    teacher_first_name = ""
    teacher_last_name = ""
    title = ""


teacher_ids = [""]

teacher_first_names = [""]

teacher_last_names = [""]

titles = [""]


class StudentGroup:
    group_id = ""
    group_name = ""


group_names = [""]

group_ids = [""]

# end_at i start_at jest w CoursePlan

the_classes = [""]

types = [""]


class CoursePlan:
    course_id = ""
    faculty = ""
    course = ""
    term = ""
    start_at = ""
    end_at = ""
    first_week_type = ""
    studies_mode = ""


course_ids = [""]

faculties = [""]

courses = [""]

terms = [""]

start_ats = [""]

end_ats = [""]

first_week_types = [""]

studies_modes = [""]


class User:
    user_id = ""
    login = ""
    password = ""
    group = ""


user_ids = [""]

logins = [""]

passwords = [""]


class Subject:
    subject_id = ""
    name = ""
    abbr = ""


subject_ids = [""]

names = [""]

abbr_s = [""]


class Slot:
    slot_id = ""
    day_of_week = ""
    start_hour = ""
    end_hour = ""
    week_type = ""
    description = ""
    end_at = ""
    start_at = ""


slot_ids = [""]

day_of_weeks = [""]

start_hours = [""]

end_hours = [""]

week_types = [""]

descriptions = [""]


class Lesson:
    lesson_id = ""
    lesson_type = ""
    classroom = ""


lesson_types = [""]

classrooms = [""]

lesson_ids = [""]


class Modification:
    modification_type = ""
    modification_id = ""


modification_types = [""]

modification_ids = [""]


class OtherActivity:
    other_activity_title = ""
    other_activity_id = ""


other_activity_titles = [""]

other_activity_ids = [""]

