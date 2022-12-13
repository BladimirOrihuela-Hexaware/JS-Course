import { TestSet } from "./models/TestSet";
import Search_Hexaware from "./Pages/google/test_cases/search_hexaware";

const chrometestCase = Search_Hexaware.copyTC().setBrowser("nintendo"); //But executed in chrome
const EdgetestCase = Search_Hexaware.copyTC().setBrowser("edge"); //But executed in edge

const google_set = new TestSet([]);
google_set.testCases = [chrometestCase, EdgetestCase];

// google_set.parallel = false;

google_set.executeTests();
