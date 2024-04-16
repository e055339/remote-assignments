SELECT user.email, article.title, article.content 
FROM user 
INNER JOIN article 
ON user.id = article.user_id;
--     email                title           content
-- example@gmail.com	eric's article	    hello world
-- example@gmail.com	example's article	hello world
-- example@gmail.com	example's article	hello world
-- example@gmail.com	example's article	hello world
-- example@gmail.com	example's article	hello world
-- example@gmail.com	example's article	hello world
-- example@gmail.com	example's article	hello world
-- eric@gmail.com	    eric's article	    hello world
-- eric@gmail.com	    eric's article	    hello world
-- eric@gmail.com	    eric's article	    hello world
-- eric@gmail.com	    eric's article	    hello world
-- eric@gmail.com	    eric's article	    hello world
-- eric@gmail.com	    eric's article	    hello world
-- sean@gmail.com	    sean's article	    hello world
-- sean@gmail.com	    sean's article	    hello world
-- sean@gmail.com	    sean's article	    hello world
-- sean@gmail.com	    sean's article	    hello world
-- sean@gmail.com	    sean's article	    hello world
-- sean@gmail.com	    sean's article	    hello world
-- ichikawa@gmail.com	ichikawa's article	hello world
-- ichikawa@gmail.com	ichikawa's article	hello world
-- ichikawa@gmail.com	ichikawa's article	hello world
-- ichikawa@gmail.com	ichikawa's article	hello world
-- ichikawa@gmail.com	ichikawa's article	hello world
-- ichikawa@gmail.com	ichikawa's article	hello world
-- yamada@gmail.com	    yamada's article	hello world
-- yamada@gmail.com	    yamada's article	hello world
-- yamada@gmail.com	    yamada's article	hello world
-- yamada@gmail.com	    yamada's article	hello world
-- yamada@gmail.com	    yamada's article	hello world
-- yamada@gmail.com	    yamada's article	hello world

SELECT * FROM article 
WHERE id BETWEEN 7 AND 12;
--id  user_id       title              content
-- 7	1	   example's article	 hello world
-- 8	2	   eric's article	     hello world
-- 9	3	   sean's article	     hello world
-- 10	4	   ichikawa's article	 hello world
-- 11	5	   yamada's article	     hello world
-- 12	1	   example's article	 hello world