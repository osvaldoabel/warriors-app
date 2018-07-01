<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Warrior;
use App\Models\Thumbnail;
use App\Http\Resources\ThumbnailResource;
class ThumbnailController extends Controller
{
    public function index(Warrior $warrior)
    {
        return ThumbnailResource::collection($warrior->Thumbnails);
    }

    public function store(Request $request, Warrior $warrior)
    {
        $request
                ->file('file_name')
                ->store("$warrior->id");
        
        $filename = $request
                ->file('file_name')
                ->hashName();

        $Thumbnail = Thumbnail::create([
            'name' => $request->name,
            'Warrior_id' => $warrior->id,
            'file_name' => $filename
        ]);

        return new ThumbnailResource($Thumbnail);
    }    

    
    public function update($id, Request $request)
    {
        return false;
    }
    
    public function destroy(Request $request)
    {
        return false;
    }
    
    public function ThumbnailUrl($ThumbnailName)
    {
        $Thumbnails = Thumbnail::whereFileName($ThumbnailName)->get();
        if (!$Thumbnails->count()) {
            abort(404);
        }

        
        $Thumbnail      = $Thumbnails->first();
        $ThumbnailPath  =  storage_path("app/{$Thumbnail->Warrior_id}/$Thumbnail->file_name");

        return response()->download($ThumbnailPath);
    }

}
