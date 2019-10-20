export class AppUrl {

  // Common
  public static home = 'home';
  public static list = 'list';
  public static single = 'single';

  // Modules
  public static public = '';
  public static auth = 'auth';
  public static private = 'private';

  // public component

  // auth component

  // private component
  public static dashboard = 'dashboard';
  public static project = 'project';
  public static language = 'language';
  public static localization = 'localization';


  public static privateDashboard = `${AppUrl.private}/${AppUrl.dashboard}`

  public static projectList = `${AppUrl.project}/${AppUrl.list}`;
  public static languageList = `${AppUrl.language}/${AppUrl.list}`;
  public static localizationList = `${AppUrl.localization}/${AppUrl.list}`;

  public static privateProjectList = `${AppUrl.private}/${AppUrl.project}/${AppUrl.list}`;
  public static privateLanguageList = `${AppUrl.private}/${AppUrl.language}/${AppUrl.list}`;
  public static privateLocalizationList = `${AppUrl.private}/${AppUrl.localization}/${AppUrl.list}`;

  public static projectSingle = `${AppUrl.project}/${AppUrl.single}`;
  public static languageSingle = `${AppUrl.language}/${AppUrl.single}`;
  public static localizationSingle = `${AppUrl.localization}/${AppUrl.single}`;

  public static privateProjectSingle = `${AppUrl.private}/${AppUrl.project}/${AppUrl.single}`;
  public static privateLanguageSingle = `${AppUrl.private}/${AppUrl.language}/${AppUrl.single}`;
  public static privateLocalizationSingle = `${AppUrl.private}/${AppUrl.localization}/${AppUrl.single}`;

}
