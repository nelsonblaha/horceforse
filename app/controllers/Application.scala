package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def crypto = Action {
    Ok(views.html.crypto.render())
  }

  def calendar = Action {
    Ok(views.html.calendar.render())
  }

}