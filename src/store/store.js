import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      messages: [],
      hello: "A",
    };
  },
  getters: {
    allmeassages(state) {
      return state.messages;
    },
  },
  mutations: {
    setSaveMessage(state, payload) {
      state.messages = payload;
    },
  },
  actions: {
    async getMessage(context) {
      let messages = [];
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=418a92c3579f4060947c3e142f2d1d98"
      );
      const responseData = await response.json();
      const responseDataArticle = responseData.articles;
      for (const key in responseDataArticle) {
        const message = {
          sourceId: responseDataArticle[key].source.id,
          sourceName: responseDataArticle[key].source.name,
          author: responseDataArticle[key].author,
          title: responseDataArticle[key].title,
          description: responseDataArticle[key].description,
          url: responseDataArticle[key].url,
          urlToImage: responseDataArticle[key].urlToImage,
          publishedAt: responseDataArticle[key].publishedAt,
          content: responseDataArticle[key].content,
        };
        messages.push(message);
      }

      console.log(messages);
      context.commit("setSaveMessage", messages);
    },
  },
});
