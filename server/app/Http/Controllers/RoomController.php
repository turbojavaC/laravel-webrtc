<?php

namespace App\Http\Controllers;

use App\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return Room::all();
  }


  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $data = $request->validate([
      'name' => 'required|string',
      'author' => 'required|string'
    ]);
    $room = Room::create($data);
    return response($room, 201);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Room  $room
   * @return \Illuminate\Http\Response
   */
  public function show(Room $room)
  {
        //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Room  $room
   * @return \Illuminate\Http\Response
   */
  public function edit(Room $room)
  {
        //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Room  $room
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Room $room)
  {
        //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Room  $room
   * @return \Illuminate\Http\Response
   */
  public function destroy(Room $room)
  {
        //
  }
}
