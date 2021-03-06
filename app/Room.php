<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
  protected $fillable = ['name', 'author'];

  protected $hidden = ['updated_at'];
}
