<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Warrior extends Model
{
    protected $fillable = [
        'name', 'email', 'password',
    ];

    public function thumbnails()
    {
        return $this->hasMany(Thumbnail::class);
    }

    public function specialities()
    {
        return $this->belongsToMany(Speciality::class);
    }
}