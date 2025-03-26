@Controller
class ArticleListController {

  @GetMapping("/articles/{articleId}")
  String getArticles(Model model, @PathVariable String articleId) {

     var articles = loadARticles();

     model.put("articles", articles);

     return "article-list"; // VIEW

   }

}