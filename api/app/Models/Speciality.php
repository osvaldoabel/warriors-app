<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Speciality extends Model
{
    public function warriors()
    {
        return $this->belongsToMany(Warrior::class);
    }
}
