<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Todos;
use App\User;

class TodosController extends Controller
{   
    public function __construct(){
        $this->middleware('auth:api');
    }

    public function allTodos(){
        $todos = Todos::where("user_id", Auth::user()->id)->get();
        return $todos;
    }

    public function addTodo(request $request){
        //return $request;
        $todo = new Todos;
        $todo->user_id = Auth::user()->id;
        $todo->todo = $request->todo;
        $todo->finished = 0;
        if( $todo->save() ){
            return $todo;
        } else {
            return "Error";
        }
    }

    public function delTodo(request $request){
        $todo = Todos::findOrFail($request->todo_id);
        if( $todo->delete() ){
            $response = array(
                "status" => 1,
                "message" => "Deleted Succesfully"
            );
            return $response;
        } else {
            return "Error";
        }
    }

    public function finishTodo($todo_id){
        $todo = Todos::findOrFail($todo_id);
        $todo->finished = 1 - $todo->finished;
        if($todo->save()){
            return $todo;
        } else {
            return "Error";
        }
    }
}
