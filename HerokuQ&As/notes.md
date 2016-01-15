cd into the the app folder
run the followig command on the
$heroku create


How to change git remote path for Heroku to a new path
heroku git:remote -a <newname>
```
railsguide-blog [master] :> git remote -v

heroku  https://git.heroku.com/murmuring-harbor-5279.git (fetch)
heroku  https://git.heroku.com/murmuring-harbor-5279.git (push)
origin  https://github.com/anujaverma11/railsguide-blog.git (fetch)
origin  https://github.com/anujaverma11/railsguide-blog.git (push)

- railsguide-blog [master] :> heroku git:remote -a desolate-coast-9366

set git remote heroku to https://git.heroku.com/desolate-coast-9366.git
railsguide-blog [master] :> git remote -v

heroku  https://git.heroku.com/desolate-coast-9366.git (fetch)
heroku  https://git.heroku.com/desolate-coast-9366.git (push)
origin  https://github.com/anujaverma11/railsguide-blog.git (fetch)
origin  https://github.com/anujaverma11/railsguide-blog.git (push)
```